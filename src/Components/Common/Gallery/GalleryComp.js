import React, { useEffect, useState } from 'react';
import { SRLWrapper } from 'simple-react-lightbox';

import './GalleryComp.css';
import images from '../../../data';

const GalleryComp = () => {
  const [tag, setTag] = useState('all');
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === 'all'
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);
  return (
    <>
      <section className="home_gallery_area p_120">
        <div className="container">
          <div className="main_title">
            <h2>Our Latest Featured Projects</h2>
            <p>Who are in extremely love with eco friendly system.</p>
          </div>
          <div className="isotope_fillter">
            <ul className="gallery_filter list">
              <TagButton
                name="all"
                tagActive={tag === 'all' ? true : false}
                handleSetTag={setTag}
              />{' '}
              <TagButton
                name="MERN"
                tagActive={tag === 'MERN' ? true : false}
                handleSetTag={setTag}
              />{' '}
              <TagButton
                name="NODEJS"
                tagActive={tag === 'NODEJS' ? true : false}
                handleSetTag={setTag}
              />{' '}
              <TagButton
                name="CSS/SASS"
                tagActive={tag === 'CSS/SASS' ? true : false}
                handleSetTag={setTag}
              />
              <TagButton
                name="JAVASCRIPT"
                tagActive={tag === 'JAVASCRIPT' ? true : false}
                handleSetTag={setTag}
              />
              <TagButton
                name="PYTHON/AI"
                tagActive={tag === 'PYTHON/AI' ? true : false}
                handleSetTag={setTag}
              />
            </ul>
          </div>
        </div>
        <SRLWrapper>
          <div className="container">
            <div className="gallery_f_inner row imageGallery1">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="col-lg-4 col-md-4 col-sm-6 brand"
                >
                  <div className="h_gallery_item">
                    <div className="g_img_item">
                      <img
                        className="img-fluid"
                        src={`/img/gallery/${image.imageName}`}
                        alt=""
                      />
                      <a className="light" href={`${image.link}`}>
                        <i class="fas fa-link fa-2x"></i>
                      </a>
                    </div>
                    <div className="g_item_text">
                      <a href={`${image.link}`}>
                        <h4>{image.name}</h4>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SRLWrapper>
      </section>
    </>
  );
};

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <a
      className={`tag ${tagActive ? 'active' : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </a>
  );
};

export default GalleryComp;
