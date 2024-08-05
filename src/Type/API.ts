export interface APIProps {
  id: number;
  title: string;
  artist_display: string;
  artist_title: string;
  date_display: string;
  main_reference_number: string;
  image_id: string;
  images?: string;
  credit_line?: string;
  dimensions?: string;
  place_of_origin?: string;
  is_public_domain?: boolean;
}
