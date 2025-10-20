export interface Project {
  title: string;
  summary: string;
  description: string;
  previewImage: ProjectMedia;
  media: ProjectMedia[];
  tags: string[];
  github?: string;
  demo?: string;
}

export interface ProjectMedia {
  type: "image" | "gif" | "video";
  src: string;
  alt?: string;
  captions?: string;
}
