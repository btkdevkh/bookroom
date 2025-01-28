# BookRoom App

## Usage Instructions

1. Install dependencies:

   ```sh
   npm install
   ```

2. Create a [.env.local](http://_vscodecontentref_/1) file in the root directory with the following variable:

   ```env
   NEXT_APPWRITE_KEY="YOUR_"
   NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
   NEXT_PUBLIC_APPWRITE_PROJECT="YOUR_"
   NEXT_PUBLIC_APPWRITE_DATABASE="YOUR_"
   NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS="YOUR_"
   NEXT_PUBLIC_APPWRITE_COLLECTION_BOOKINGS="YOUR_"
   NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_AVATARS="YOUR_"
   NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ROOMS="YOUR_"
   NEXT_PUBLIC_URL=http://localhost:3000
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to use the app.
