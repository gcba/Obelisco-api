type UUID = string;

export interface Phone {
  id: UUID;
  name: string;
  number: string;
}

export interface SocialMedia {
  id: UUID;
  name: string;
  url: string;
  icon: string;
}

export interface Link {
  id: UUID;
  name: string;
  url: string;
}

export interface Image {
  id: UUID;
  name: string;
  alt: string;
  url: string;
}

export interface Footer {
  phones?: Phone[];

  socialMedia?: SocialMedia[];

  links?: Link[];

  images?: Image[];
}
