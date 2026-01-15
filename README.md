# SpotLite App

A modern social media mobile application built with React Native and Expo, featuring real-time updates and a clean, intuitive interface. Share your moments, connect with friends, and stay updated with a seamless social experience.

## 📱 Screenshots & Demo

SpotLite provides an Instagram-like experience with:

- Clean, modern UI with dark theme support
- Smooth animations and transitions
- Real-time updates for likes, comments, and notifications
- Responsive image handling with optimal quality

## ✨ Features

### Core Functionality

- **🔐 Authentication**: Secure Google OAuth login via Clerk for quick and safe access
- **📰 Feed**: Browse an infinite scroll feed of posts from users you follow
- **📸 Create Posts**: Upload images from your gallery with optional captions
- **❤️ Interactions**:
  - Like posts with real-time updates
  - Comment on posts with threaded conversations
  - Bookmark posts to save for later viewing
- **🔔 Notifications**: Real-time notifications for:
  - New likes on your posts
  - Comments on your posts
  - New followers
- **👤 User Profiles**:
  - View your profile stats (followers, following, post count)
  - Edit profile information and bio
  - Upload profile pictures
- **🔖 Bookmarks**: Access all your saved posts in one place

### User Experience

- Tab-based navigation for easy access to all features
- Pull-to-refresh on feed and profile screens
- Haptic feedback for interactions
- Loading states and error handling
- Image optimization and caching

## 🛠️ Tech Stack

- **Frontend**: React Native 0.76.9 with Expo 52
- **Navigation**: Expo Router v4 (file-based routing)
- **Backend**: Convex v1.23 (real-time database with serverless functions)
- **Authentication**: Clerk Expo v2.9 (OAuth & session management)
- **Language**: TypeScript 5.3+
- **UI Components**:
  - Expo Image for optimized image rendering
  - React Native Gesture Handler & Reanimated for animations
  - Expo Vector Icons (Ionicons)
- **Storage**: Convex file storage for images
- **Date Handling**: date-fns for time formatting
- **State Management**: Convex React hooks for real-time queries

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- Expo Go app on your mobile device (for testing)
- A Clerk account (free tier available)
- A Convex account (free tier available)
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sajabh/spotliteApp.git
   cd spotliteApp
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up Convex:

   ```bash
   npx convex dev
   ```

   This will create a new Convex project and link it to your app.

4. Set up Clerk:

   - Create a Clerk application at https://clerk.com
   - Enable Google OAuth in the Clerk dashboard
   - Add your Clerk publishable key to your app configuration
   - Configure the OAuth redirect URL

5. Configure Clerk webhook for user sync:

   - In Clerk dashboard, set up a webhook pointing to your Convex HTTP endpoint
   - Use the webhook to sync user data to Convex

6. Start the development server:

   ```bash
   npx expo start
   ```

7. Scan the QR code with Expo Go (Android) or Camera app (iOS)

## 📁 Project Structure

```
app/                         # Main application screens (Expo Router)
  _layout.tsx               # Root layout with providers
  index.tsx                 # Entry point (redirects to login)
  (auth)/                   # Authentication group
    login.tsx               # Google OAuth login screen
  (tabs)/                   # Tab navigation group
    _layout.tsx             # Tab navigator configuration
    index.tsx               # Home feed screen
    create.tsx              # Create new post screen
    notifications.tsx       # Notifications feed
    bookmarks.tsx           # Saved posts
    profile.tsx             # User profile screen
  utlis/                    # Utility functions
    auth.ts                 # Authentication helpers

components/                 # Reusable React components
  Post.tsx                  # Post card component
  Comment.tsx               # Comment item component
  CommentsModal.tsx         # Comments bottom sheet
  Loader.tsx                # Loading spinner
  notification.tsx          # Notification item
  initialLayout.tsx         # Layout wrapper

convex/                     # Backend (Convex)
  schema.ts                 # Database schema definitions
  auth.config.ts            # Clerk authentication config
  posts.ts                  # Post queries and mutations
  comments.ts               # Comment operations
  notifications.ts          # Notification handlers
  bookmarks.ts              # Bookmark operations
  user.ts                   # User profile operations
  http.ts                   # HTTP endpoints (webhooks)
  _generated/               # Auto-generated Convex types

providers/                  # React Context providers
  ClerkAndConvexProvider.tsx # Auth & DB provider wrapper

styles/                     # StyleSheet definitions
  auth.styles.ts            # Login screen styles
  create.styles.ts          # Create post styles
  feed.styles.ts            # Feed screen styles
  notification.styles.ts    # Notification styles
  profile.styles.ts         # Profile screen styles

constants/                  # App constants
  theme.ts                  # Color palette and theme

assets/                     # Static assets
  images/                   # App images and icons
  fonts/                    # Custom fonts
```

## 🚀 Available Scripts

- `npm start` - Start the Expo development server
- `npm run web` - Open in web browser
- `npx convex dev` - Start Convex backend in development mode
- `npx convex deploy` - Deploy Convex backend to production

## 🗄️ Database Schema

The app uses Convex with the following main tables:

### Users

- username, fullname, email, bio
- image (profile picture URL)
- followers, following, posts (counts)
- clerkId (for authentication sync)

### Posts

- userId (reference to user)
- imageUrl, storageId (Convex storage)
- caption (optional)
- likes, comments (counts)

### Comments

- userId, postId (references)
- content (comment text)

### Likes

- userId, postId (references)
- Indexed for fast lookups

### Follows

- followerId, followingId (user references)
- Double-indexed for follower/following queries

### Notifications

- receiverId, senderId (user references)
- type: "like", "comment", or "follow"
- postId, commentId (optional references)

### Bookmarks

- userId, postId (references)
- Indexed for quick access

## 🎨 App Screens

1. **Login Screen** - Google OAuth authentication
2. **Feed** - View posts from followed users
3. **Create Post** - Upload images with captions
4. **Notifications** - See all your interactions
5. **Bookmarks** - Access saved posts
6. **Profile** - View and edit your profile

## 🔧 Configuration

### Clerk Setup

1. Create a Clerk application
2. Enable Google OAuth provider
3. Add publishable key to your app
4. Configure webhook for user synchronization

### Convex Setup

1. Run `npx convex dev` to initialize
2. Configure Clerk authentication in `convex/auth.config.ts`
3. Deploy schema and functions
4. Set up HTTP endpoints for webhooks

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
