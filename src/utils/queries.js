
export const foodMenuQuery = `*[_type == "foodMenu"]{
  _id,
  name,
  description,
  price,
  category,
  image{
    asset->{
      _id,
      url
    }
  }
}`;
