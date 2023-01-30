import axios from "axios";

export const getImages = async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.flickr.com/services/rest?api_key=75f8b022f6f8f5732586aa611e391458&method=flickr.galleries.getPhotos&gallery_id=72157721443267744&extras=url_o&format=json&nojsoncallback=1"
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
