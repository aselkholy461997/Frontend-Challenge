export class Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;

  constructor(postId: number, name: string, email: string, body: string) {
    this.name = name;
    this.postId = postId;
    this.email = email;
    this.body = body;
  }
}
