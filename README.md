# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Acquisition Labs launch notes

### Consultation form email delivery

The consultation form now submits its fields to `hello.acquisitionlabs@gmail.com` through FormSubmit's AJAX endpoint. The first submission may require inbox activation: submit a test request from the deployed site, open the activation email sent by FormSubmit to that Gmail inbox, and approve it. Until activation is complete, do not treat the form as production-ready. Check spam/promotions if the activation email does not appear. Test a second submission and confirm the full request arrives before sharing the website publicly.

The form includes name, work email, business, website, monthly ad budget, lead-generation challenge, and optional extra context. The footer contact email has also been updated to the same address.

### Run locally

```sh
npm install
npm run dev
```

### Production build

```sh
npm run build
```

This project uses TanStack Start and is not a plain static HTML site. Deploy it to a host that supports the framework's production server/runtime (for example, a compatible Node hosting service), set the build/start commands required by that host, and connect the domain after the production build succeeds. The site has not been published from this workspace; hosting/domain access is required to make it publicly live.
