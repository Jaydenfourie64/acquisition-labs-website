import { Environment, Lightformer } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type Palette = {
  background: string;
  foreground: string;
  accent: string;
};

const LEAD_COUNT = 28;

function flowPosition(index: number, progress: number) {
  const lane = (index % 7) - 3;
  const x = THREE.MathUtils.lerp(-6.4, 6.4, progress);
  const compression = 0.18 + Math.abs(progress - 0.5) * 1.65;
  const y = lane * 0.34 * compression + Math.sin(index * 2.3 + progress * 7) * 0.1;
  const z = Math.cos(index * 1.7) * 1.25 * compression;
  return [x, y, z] as const;
}

function LeadStream({ palette }: { palette: Palette }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const phases = useMemo(
    () => Array.from({ length: LEAD_COUNT }, (_, index) => (index * 0.137) % 1),
    [],
  );

  useFrame(({ clock }, rawDelta) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const delta = Math.min(rawDelta, 0.05);
    const elapsed = clock.getElapsedTime();

    phases.forEach((phase, index) => {
      const progress = (phase + elapsed * 0.055) % 1;
      const [x, y, z] = flowPosition(index, progress);
      const qualified = progress > 0.58;
      const scale = qualified ? 0.14 : 0.075 + (index % 3) * 0.015;
      dummy.position.set(x, y, z);
      dummy.rotation.set(elapsed * 0.18 + index, elapsed * 0.12, index);
      dummy.scale.lerp(new THREE.Vector3(scale, scale, scale), 1 - Math.exp(-8 * delta));
      dummy.updateMatrix();
      mesh.setMatrixAt(index, dummy.matrix);
      mesh.setColorAt(index, new THREE.Color(qualified ? palette.accent : palette.foreground));
    });
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, LEAD_COUNT]}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial roughness={0.25} metalness={0.15} transparent opacity={0.72} />
    </instancedMesh>
  );
}

function QualificationGate({ palette }: { palette: Palette }) {
  const groupRef = useRef<THREE.Group>(null);
  const pulseRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }, rawDelta) => {
    const delta = Math.min(rawDelta, 0.05);
    const elapsed = clock.getElapsedTime();
    if (groupRef.current) groupRef.current.rotation.x += delta * 0.1;
    if (pulseRef.current) {
      const pulse = 1 + Math.sin(elapsed * 2) * 0.08;
      pulseRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group ref={groupRef} position={[0.5, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
      {[0, 1, 2].map((ring) => (
        <mesh key={ring} position={[0, 0, ring * 0.22 - 0.22]}>
          <torusGeometry args={[1.2 - ring * 0.18, 0.018, 12, 80]} />
          <meshStandardMaterial color={palette.accent} transparent opacity={0.42 - ring * 0.08} />
        </mesh>
      ))}
      <mesh ref={pulseRef}>
        <torusGeometry args={[0.66, 0.035, 12, 80]} />
        <meshStandardMaterial color={palette.accent} emissive={palette.accent} emissiveIntensity={0.45} />
      </mesh>
    </group>
  );
}

function BookedConversation({ palette }: { palette: Palette }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.45) * 0.12;
    groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.7) * 0.08;
  });

  return (
    <group ref={groupRef} position={[5.2, 0, 0]}>
      <mesh castShadow>
        <boxGeometry args={[1.6, 1.45, 0.18]} />
        <meshPhysicalMaterial
          color={palette.background}
          roughness={0.2}
          metalness={0.08}
          clearcoat={0.8}
        />
      </mesh>
      <mesh position={[0, 0.43, 0.12]}>
        <boxGeometry args={[1.28, 0.12, 0.035]} />
        <meshStandardMaterial color={palette.accent} />
      </mesh>
      {[-0.34, 0, 0.34].map((x) => (
        <mesh key={x} position={[x, -0.05, 0.12]}>
          <circleGeometry args={[0.115, 24]} />
          <meshStandardMaterial color={palette.accent} transparent opacity={0.78} />
        </mesh>
      ))}
      <pointLight color={palette.accent} intensity={2.5} distance={4} position={[0, 0, 1]} />
    </group>
  );
}

function PipelineRails({ palette }: { palette: Palette }) {
  const curves = useMemo(
    () => [
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(-6.5, 1.25, -0.8),
        new THREE.Vector3(-3.4, 0.75, -0.4),
        new THREE.Vector3(0.5, 0.22, 0),
        new THREE.Vector3(3.4, 0.12, 0),
        new THREE.Vector3(5.2, 0.4, 0),
      ]),
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(-6.5, -1.25, 0.8),
        new THREE.Vector3(-3.4, -0.75, 0.4),
        new THREE.Vector3(0.5, -0.22, 0),
        new THREE.Vector3(3.4, -0.12, 0),
        new THREE.Vector3(5.2, -0.4, 0),
      ]),
    ],
    [],
  );

  return curves.map((curve, index) => (
    <mesh key={index}>
      <tubeGeometry args={[curve, 72, 0.012, 6, false]} />
      <meshStandardMaterial color={palette.accent} transparent opacity={0.34} />
    </mesh>
  ));
}

function CameraDrift() {
  const pointer = useThree((state) => state.pointer);
  useFrame(({ camera }, rawDelta) => {
    const delta = Math.min(rawDelta, 0.05);
    camera.position.x = THREE.MathUtils.damp(camera.position.x, pointer.x * 0.45, 3, delta);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, 1.25 + pointer.y * 0.22, 3, delta);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export function LeadJourneyScene({ palette }: { palette: Palette }) {
  const width = useThree((state) => state.size.width);
  const isCompact = width < 640;

  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[2, 6, 7]} intensity={2.2} color={palette.background} />
      <Environment resolution={128}>
        <Lightformer intensity={2} color={palette.background} position={[0, 5, 2]} scale={[10, 10, 1]} />
        <Lightformer intensity={1.5} color={palette.accent} position={[-5, 1, 0]} rotation-y={Math.PI / 2} scale={[8, 2, 1]} />
      </Environment>
      <CameraDrift />
      <group
        position={[0, isCompact ? 3.35 : 2.55, 0]}
        scale={isCompact ? 0.68 : 0.9}
        rotation={[0.06, -0.08, -0.03]}
      >
        <PipelineRails palette={palette} />
        <LeadStream palette={palette} />
        <QualificationGate palette={palette} />
        <BookedConversation palette={palette} />
      </group>
    </>
  );
}