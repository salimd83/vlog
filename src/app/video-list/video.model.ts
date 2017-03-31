export class Video {

  constructor(
    public title: string,
    public imagePath: string,
    public imageThumbPath: string,
    public videoUrl: string,
    public author: string,
    public category: string,
    public createdAt: string,
    public isFeatured: boolean) {}
}
