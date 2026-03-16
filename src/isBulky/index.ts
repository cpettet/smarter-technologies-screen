const isBulky = (width: number, height: number, length: number) => {
  if (width > 150 || height > 150 || length > 150) {
    return true;
  }

  const volume = width * height * length;
  return volume > 1_000_000;
};

export default isBulky;
