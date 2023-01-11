
export interface Post {
  _id: string;
  title: string;
  content: string;
  user_id: string;
  comments_id: string[];
  createdAt: string;
  updatedAt: string;
}
