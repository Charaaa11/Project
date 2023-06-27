import React from "react";
import Gallery from "react-photo-gallery";

function MediaGallery() {
  const photos = [
    {
      src: "https://images.pexels.com/photos/8894854/pexels-photo-8894854.jpeg",
      width: 5108,
      height: 3831,
    },
    {
      src: "https://images.pexels.com/photos/9562466/pexels-photo-9562466.jpeg",
      width: 3159,
      height: 4738,
    },
    {
      src: "https://images.pexels.com/photos/11901567/pexels-photo-11901567.jpeg",
      width: 3040,
      height: 4224,
    },
    {
      src: "https://images.pexels.com/photos/3511292/pexels-photo-3511292.jpeg",
      width: 4000,
      height: 6000,
    },
    {
      src: "https://images.pexels.com/photos/746644/pexels-photo-746644.jpeg",
      width: 2047,
      height: 1409,
    },
    {
      src: "https://images.pexels.com/photos/4638380/pexels-photo-4638380.jpeg",
      width: 5162,
      height: 7739,
    },
    {
      src: "https://images.pexels.com/photos/4639152/pexels-photo-4639152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      width: 5304,
      height: 7952,
    },
    {
      src: "https://images.pexels.com/photos/8894854/pexels-photo-8894854.jpeg",
      width: 5108,
      height: 3831,
    },
    {
      src: "https://images.pexels.com/photos/9562466/pexels-photo-9562466.jpeg",
      width: 3159,
      height: 4738,
    },
    {
      src: "https://images.pexels.com/photos/11901567/pexels-photo-11901567.jpeg",
      width: 3040,
      height: 4224,
    },
    {
      src: "https://images.pexels.com/photos/9562535/pexels-photo-9562535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      width: 3712,
      height: 5568,
    },
    {
      src: "https://images.pexels.com/photos/2990848/pexels-photo-2990848.jpeg",
      width: 6142,
      height: 4095,
    },
    {
      src: "https://images.pexels.com/photos/4916521/pexels-photo-4916521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      width: 2784,
      height: 1856,
    },
    {
      src: "https://images.pexels.com/photos/8747731/pexels-photo-8747731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      width: 4000,
      height: 3000,
    },
    {
      src: "https://images.pexels.com/photos/8894854/pexels-photo-8894854.jpeg",
      width: 5108,
      height: 3831,
    },
    {
      src: "https://images.pexels.com/photos/9562466/pexels-photo-9562466.jpeg",
      width: 3159,
      height: 4738,
    },
    {
      src: "https://images.pexels.com/photos/11901567/pexels-photo-11901567.jpeg",
      width: 3040,
      height: 4224,
    },
    {
      src: "https://images.pexels.com/photos/3511292/pexels-photo-3511292.jpeg",
      width: 4000,
      height: 6000,
    },
    {
      src: "https://images.pexels.com/photos/746644/pexels-photo-746644.jpeg",
      width: 2047,
      height: 1409,
    },
    {
      src: "https://images.pexels.com/photos/12923918/pexels-photo-12923918.jpeg",
      width: 4160,
      height: 6240,
    },
    {
      src: "https://images.pexels.com/photos/4638380/pexels-photo-4638380.jpeg",
      width: 5162,
      height: 7739,
    },
    {
      src: "https://images.pexels.com/photos/4639152/pexels-photo-4639152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      width: 5304,
      height: 7952,
    },
    {
      src: "https://images.pexels.com/photos/9562535/pexels-photo-9562535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      width: 3712,
      height: 5568,
    },
    {
      src: "https://images.pexels.com/photos/8894854/pexels-photo-8894854.jpeg",
      width: 5108,
      height: 3831,
    },
    {
      src: "https://images.pexels.com/photos/9562466/pexels-photo-9562466.jpeg",
      width: 3159,
      height: 4738,
    },
    {
      src: "https://images.pexels.com/photos/11901567/pexels-photo-11901567.jpeg",
      width: 3040,
      height: 4224,
    },
    {
      src: "https://images.pexels.com/photos/3511292/pexels-photo-3511292.jpeg",
      width: 4000,
      height: 6000,
    },
    {
      src: "https://images.pexels.com/photos/746644/pexels-photo-746644.jpeg",
      width: 2047,
      height: 1409,
    },
    {
      src: "https://images.pexels.com/photos/4638380/pexels-photo-4638380.jpeg",
      width: 5162,
      height: 7739,
    },
    {
      src: "https://images.pexels.com/photos/4639152/pexels-photo-4639152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      width: 5304,
      height: 7952,
    },
    {
      src: "https://images.pexels.com/photos/9562535/pexels-photo-9562535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      width: 3712,
      height: 5568,
    },
    {
      src: "https://images.pexels.com/photos/2990848/pexels-photo-2990848.jpeg",
      width: 6142,
      height: 4095,
    },
    {
      src: "https://images.pexels.com/photos/4916521/pexels-photo-4916521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      width: 2784,
      height: 1856,
    },
    {
      src: "https://images.pexels.com/photos/8747731/pexels-photo-8747731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      width: 4000,
      height: 3000,
    },
    {
      src: "https://images.pexels.com/photos/3511292/pexels-photo-3511292.jpeg",
      width: 4000,
      height: 6000,
    },
    {
      src: "https://images.pexels.com/photos/746644/pexels-photo-746644.jpeg",
      width: 2047,
      height: 1409,
    },
    {
      src: "https://images.pexels.com/photos/8894854/pexels-photo-8894854.jpeg",
      width: 5108,
      height: 3831,
    },
    {
      src: "https://images.pexels.com/photos/9562466/pexels-photo-9562466.jpeg",
      width: 3159,
      height: 4738,
    },
    {
      src: "https://images.pexels.com/photos/11901567/pexels-photo-11901567.jpeg",
      width: 3040,
      height: 4224,
    },
    {
      src: "https://images.pexels.com/photos/12923918/pexels-photo-12923918.jpeg",
      width: 4160,
      height: 6240,
    },
    {
      src: "https://images.pexels.com/photos/4638380/pexels-photo-4638380.jpeg",
      width: 5162,
      height: 7739,
    },
    {
      src: "https://images.pexels.com/photos/4639152/pexels-photo-4639152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      width: 5304,
      height: 7952,
    },
    {
      src: "https://images.pexels.com/photos/9562535/pexels-photo-9562535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      width: 3712,
      height: 5568,
    },
    {
      src: "https://images.pexels.com/photos/3511292/pexels-photo-3511292.jpeg",
      width: 4000,
      height: 6000,
    },
    {
      src: "https://images.pexels.com/photos/746644/pexels-photo-746644.jpeg",
      width: 2047,
      height: 1409,
    },
    {
      src: "https://images.pexels.com/photos/4638380/pexels-photo-4638380.jpeg",
      width: 5162,
      height: 7739,
    },
    {
      src: "https://images.pexels.com/photos/4639152/pexels-photo-4639152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      width: 5304,
      height: 7952,
    },
    {
      src: "https://images.pexels.com/photos/9562535/pexels-photo-9562535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      width: 3712,
      height: 5568,
    },
    {
      src: "https://images.pexels.com/photos/2990848/pexels-photo-2990848.jpeg",
      width: 6142,
      height: 4095,
    },
    {
      src: "https://images.pexels.com/photos/4916521/pexels-photo-4916521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      width: 2784,
      height: 1856,
    },
    {
      src: "https://images.pexels.com/photos/8894854/pexels-photo-8894854.jpeg",
      width: 5108,
      height: 3831,
    },
    {
      src: "https://images.pexels.com/photos/9562466/pexels-photo-9562466.jpeg",
      width: 3159,
      height: 4738,
    },
    {
      src: "https://images.pexels.com/photos/11901567/pexels-photo-11901567.jpeg",
      width: 3040,
      height: 4224,
    },
    {
      src: "https://images.pexels.com/photos/8747731/pexels-photo-8747731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      width: 4000,
      height: 3000,
    },
    {
      src: "https://images.pexels.com/photos/3511292/pexels-photo-3511292.jpeg",
      width: 4000,
      height: 6000,
    },
    {
      src: "https://images.pexels.com/photos/746644/pexels-photo-746644.jpeg",
      width: 2047,
      height: 1409,
    },
    {
      src: "https://images.pexels.com/photos/12923918/pexels-photo-12923918.jpeg",
      width: 4160,
      height: 6240,
    },
    {
      src: "https://images.pexels.com/photos/4638380/pexels-photo-4638380.jpeg",
      width: 5162,
      height: 7739,
    },
    {
      src: "https://images.pexels.com/photos/4639152/pexels-photo-4639152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      width: 5304,
      height: 7952,
    },
    {
      src: "https://images.pexels.com/photos/8894854/pexels-photo-8894854.jpeg",
      width: 5108,
      height: 3831,
    },
    {
      src: "https://images.pexels.com/photos/9562466/pexels-photo-9562466.jpeg",
      width: 3159,
      height: 4738,
    },
    {
      src: "https://images.pexels.com/photos/11901567/pexels-photo-11901567.jpeg",
      width: 3040,
      height: 4224,
    },
    {
      src: "https://images.pexels.com/photos/9562535/pexels-photo-9562535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      width: 3712,
      height: 5568,
    },
  ];
  return (
    <div className="MediaGallery">
      <div className="center">
        <h2>
          Media<span> Gallery</span>
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          exercitationem porro eum aperiam consequuntur recusandae perspiciatis,
          molestiae voluptatum deserunt excepturi sunt nostrum provident earum
          qui ad, totam illum quam, alias distinctio odio. Neque eveniet qui
          temporibus rem exercitationem illum quasi sit incidunt voluptate?
          Voluptatum, vel!
        </p>
        <div className="gallery_filter">
          <span>
            <img src="" alt="" />
            <span>Photos</span>4.1k
          </span>
          <span>
            <img src="" alt="" />
            <span>Videos</span>1.1k
          </span>
        </div>
        <div id="gallery">
          <Gallery photos={photos} />
        </div>
      </div>
    </div>
  );
}

export default MediaGallery;
