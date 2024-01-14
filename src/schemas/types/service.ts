export interface IServices {
  services: IService[];
}

interface IService {
  id: number;
  image_url: string;
  title: string;
  introduction: string;
  used_count: number;
  details: string;
  tags: string[];
  rate: number;
  comment_count: number;
}
