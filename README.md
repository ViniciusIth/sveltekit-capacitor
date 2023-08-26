# Sveltekit + Capacitor Basic Template

Boilerplate code for basic capacitor integration. Following this guide you will be able to build and install your application on any device.

## Setup

_Follow those steps in order_

1. Install the dependencies

```bash
npm install // You can always use pnpm for faster results
```

2. Build

```bash
npm run build
```

3. Add your Capacitor platform

```bash
npm exec cap add android  // (or ios)
```

4. Open your platform editor

```bash
npm exec cap open android
npm exec cap open ios
```

## Hot Reload

1. Uncomment server property in `capacitor.config.ts`

2. Change the URL to your device's IP.
   To find your device IP run `ipconfig`.

3. Sync with your android/ios folder

```bash
npm exec cap sync
```

4. Run your dev server

```bash
npm run dev
```

Now you just need to open your app platform (Android Studio, XCode etc) and rebuild and run the app. Try writing something to `+page.svelte` and it should automatically appear in your device.

- You need to have an emulator/device connected to adb
- Your device has to be connected to the same Wi-Fi network as your workstation.

## Important files

`vite.config.ts`
Here you can change the port the server will be **serving** to and enable/disable https.

`capacitor.config.ts`
Here you can change the IP the application will **watch** during development. You also control the app name, ID and build folder.

## Other

- Remember to change the name and ID of your application
- Whenever you want to sync your web project with the devices, run

```bash
npm exec cap sync
```
