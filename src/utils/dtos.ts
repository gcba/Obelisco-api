export const phoneDTO = (phone: any) => {
  return {
    id: phone.id,
    name: phone.name,
    number: phone.number,
  };
};

export const socialMediaDTO = (socialMedia: any) => {
  return {
    id: socialMedia.id,
    name: socialMedia.name,
    url: socialMedia.url,
    icon: socialMedia.icon,
  };
};

export const linkDTO = (link: any) => {
  return {
    id: link.id,
    name: link.name,
    url: link.url,
  };
};

export const ImageDTO = (image: any) => {
  return {
    id: image.id,
    name: image.name,
    url: image.url,
    alt: image.alt,
  };
};

export const footerCompleteDTO = (footer: any) => {
  return {
    phones: footer.phones.map((p: any) => phoneDTO(p)),
    socialMedia: footer.socialMedia.map((s: any) => socialMediaDTO(s)),
    links: footer.links.map((l: any) => linkDTO(l)),
    images: footer.images.map((i: any) => ImageDTO(i)),
  };
};

export const footerLegalesDTO = (footer: any) => {
  return {
    links: footer.links.map((l: any) => linkDTO(l)),
    images: footer.images.map((i: any) => ImageDTO(i)),
  };
};

export const componentDTO = (component: any) => {
  return {
    component: component.code,
  };
};
