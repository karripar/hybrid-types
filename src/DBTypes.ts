type UserLevel = {
  user_level_id: number;
  level_name: "Admin" | "User" | "Guest";
};

type User = {
  user_id: number;
  username: string;
  password_hash: string;
  email: string;
  bio: string | null;
  study_field: string | null;
  user_level_id: number;
  created_at: Date | string;
};

type UserWithUnhashedPassword = Omit<User, "password_hash"> & {
  password: string;
};

type Follow = {
  follow_id: number;
  follower_id: number;
  following_id: number;
  created_at: Date | string;
};

type Notification = {
  notification_id: number;
  user_id: number;
  notification_text: string;
  is_read: boolean;
  notification_type_id: number;
  is_archived: boolean;
  created_at: Date | string;
};

type NotificationType = {
  notification_type_id: number;
  notification_type_name: string;
};

type StudyMaterial = {
  material_id: number;
  user_id: number;
  filename: string;
  thumbnail: string | null;
  filesize: number;
  media_type: string;
  title: string;
  description: string | null;
  created_at: Date | string;
  screenshots: string[] | null;
};

type StudyMaterialWithFollower = StudyMaterial & {
  follower_id: number;
};

type Comment = {
  comment_id: number;
  media_id: number;
  user_id: number;
  comment_text: string;
  created_at: Date;
};

type Like = {
  like_id: number;
  media_id: number;
  user_id: number;
  created_at: Date;
};

type Rating = {
  rating_id: number;
  media_id: number;
  user_id: number;
  rating_value: number;
  created_at: Date;
};

type Tag = {
  tag_id: number;
  tag_name: string;
};

type Favorite = {
  favorite_id: number;
  user_id: number;
  material_id: number;
  created_at: Date | string;
};

type MaterialTag = {
  material_tag_id: number;
  material_id: number;
  tag_id: number;
};

type TagResult = MaterialTag & Tag;
type UploadResult = {
  message: string;
  data?: {
    image: string;
  };
};

type MaterialRating = {
  material_id: number;
  title: string;
  avg_rating: number | null;
};

type MaterialComment = {
  material_id: number;
  title: string;
  comment_count: number;
};

type UserActivity = {
  user_id: number;
  username: string;
  material_count: number;
  comment_count: number;
  rating_count: number;
};

type UserNotification = {
  user_id: number;
  username: string;
  notification_count: number;
  unread_count: number;
};

type LatestNotification = {
  notification_id: number;
  user_id: number;
  notification_text: string;
  notification_type_name: string;
  is_read: boolean;
  created_at: Date | string;
  username: string;
};

type LatestMaterial = {
  material_id: number;
  title: string;
  user_id: number;
  description: string | null;
  created_at: Date | string;
  username: string;
};

type MostLikedMaterial = Pick<
  StudyMaterial,
  | "material_id"
  | "filename"
  | "filesize"
  | "media_type"
  | "title"
  | "description"
  | "created_at"
> &
  Pick<User, "user_id" | "username" | "email" | "created_at"> & {
    likes_count: bigint;
  };

type UserWithLevel = Omit<User, "user_level_id"> &
  Pick<UserLevel, "level_name">;

type UserWithNoPassword = Omit<UserWithLevel, "password_hash">;

type TokenContent = Pick<User, "user_id"> & Pick<UserLevel, "level_name">;

type MaterialItemWithOwner = StudyMaterial & Pick<User, "username">;

type FileInfo = {
  filename: string;
  user_id: number;
};

export type {
  UserLevel,
  User,
  StudyMaterial,
  Comment,
  Like,
  Rating,
  Tag,
  MaterialTag,
  TagResult,
  UploadResult,
  MostLikedMaterial,
  UserWithLevel,
  UserWithNoPassword,
  TokenContent,
  MaterialItemWithOwner,
  FileInfo,
  Notification,
  NotificationType,
  Follow,
  MaterialComment,
  UserActivity,
  UserNotification,
  LatestNotification,
  LatestMaterial,
  MaterialRating,
  StudyMaterialWithFollower,
  UserWithUnhashedPassword,
  Favorite
};
