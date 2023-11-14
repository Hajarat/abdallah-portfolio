import React, { useState } from 'react';
import { colors } from '../../styles';

import { Popover } from 'antd';

import Qaleb from './Qaleb';
import QalebNoSidePhotos from './QalebNoSidePhotos';
import VideoQaleb from './VideoQaleb';
import VideoQalebNoSidePhotos from './VideoQalebNoSidePhotos';

import Overwatch from './Overwatch';
import HVSF from './HVSF';
import Drone from './Drone';
import Dental from './Dental';
import RedSpades from './RedSpades';
import Poop from './Poop';
import Gold from './Gold';
import Fashion from './Fashion';

import useWindowDimensions from '../../hooks/useWindowDimensions';

const Work = () => {
  const { width } = useWindowDimensions();
  const [selectedSrc, setSelectedSrc] = useState();
  return (
    <>
      { !selectedSrc &&
        <div className='work-collection'>
          <div
            style={{
              position: 'relative',
              width: width/4-42/4,
              height: (width/4)*(9/16),
            }}
          >
            <img
              onClick={() => setSelectedSrc('/overwatch/overwatch.jpeg')}
              src={'/overwatch/overwatch.jpeg'}
              style={{
                objectFit: 'cover',
                width: width/4-42/4,
                height: (width/4)*(9/16),
              }}
            />
            <div
              onClick={() => setSelectedSrc('/overwatch/overwatch.jpeg')}
              className='grey-screen'
              style={{
                width: width/4-42/4-20,
                height: (width/4)*(9/16)-20
              }}
            >
              <h1
                style={{
                  color: colors.white,
                  fontSize: 72,
                }}
              >
                01
              </h1>
            </div>
          </div>

          <div
            style={{
              position: 'relative',
              width: width/4-42/4,
              height: (width/4)*(9/16),
            }}
          >
            <img
              onClick={() => setSelectedSrc('/Tomato.jpeg')}
              src={'/Tomato.jpeg'}
              style={{
                objectFit: 'cover',
                width: width/4-42/4,
                height: (width/4)*(9/16),
              }}
            />
            <div
              onClick={() => setSelectedSrc('/Tomato.jpeg')}
              className='grey-screen'
              style={{
                width: width/4-42/4-20,
                height: (width/4)*(9/16)-20
              }}
            >
              <h1
                style={{
                  color: colors.white,
                  fontSize: 72,
                }}
              >
                02
              </h1>
            </div>
          </div>

          <div
            style={{
              position: 'relative',
              width: width/4-42/4,
              height: (width/4)*(9/16),
            }}
          >
            <img
              onClick={() => setSelectedSrc('/Drone.jpeg')}
              src={'/Drone.jpeg'}
              style={{
                objectFit: 'cover',
                width: width/4-42/4,
                height: (width/4)*(9/16),
              }}
            />
            <div
              onClick={() => setSelectedSrc('/Drone.jpeg')}
              className='grey-screen'
              style={{
                width: width/4-42/4-20,
                height: (width/4)*(9/16)-20
              }}
            >
              <h1
                style={{
                  color: colors.white,
                  fontSize: 72,
                }}
              >
                03
              </h1>
            </div>
          </div>

          <div
            style={{
              position: 'relative',
              width: width/4-42/4,
              height: (width/4)*(9/16),
            }}
          >
            <img
              onClick={() => setSelectedSrc('/Dental.jpeg')}
              src={'/Dental.jpeg'}
              style={{
                objectFit: 'cover',
                width: width/4-42/4,
                height: (width/4)*(9/16),
              }}
            />
            <div
              onClick={() => setSelectedSrc('/Dental.jpeg')}
              className='grey-screen'
              style={{
                width: width/4-42/4-20,
                height: (width/4)*(9/16)-20
              }}
            >
              <h1
                style={{
                  color: colors.white,
                  fontSize: 72,
                }}
              >
                04
              </h1>
            </div>
          </div>

          <div
            style={{
              position: 'relative',
              width: width/4-42/4,
              height: (width/4)*(9/16),
            }}
          >
            <img
              onClick={() => setSelectedSrc('/Cyberpunk.jpeg')}
              src={'/Cyberpunk.jpeg'}
              style={{
                objectFit: 'cover',
                width: width/4-42/4,
                height: (width/4)*(9/16),
              }}
            />
            <div
              onClick={() => setSelectedSrc('/Cyberpunk.jpeg')}
              className='grey-screen'
              style={{
                width: width/4-42/4-20,
                height: (width/4)*(9/16)-20
              }}
            >
              <h1
                style={{
                  color: colors.white,
                  fontSize: 72,
                }}
              >
                05
              </h1>
            </div>
          </div>

          <div
            style={{
              position: 'relative',
              width: width/4-42/4,
              height: (width/4)*(9/16),
            }}
          >
            <img
              onClick={() => setSelectedSrc('/Poop.jpeg')}
              src={'/Poop.jpeg'}
              style={{
                objectFit: 'cover',
                width: width/4-42/4,
                height: (width/4)*(9/16),
              }}
            />
            <div
              onClick={() => setSelectedSrc('/Poop.jpeg')}
              className='grey-screen'
              style={{
                width: width/4-42/4-20,
                height: (width/4)*(9/16)-20
              }}
            >
              <h1
                style={{
                  color: colors.white,
                  fontSize: 72,
                }}
              >
                06
              </h1>
            </div>
          </div>

          <div
            style={{
              position: 'relative',
              width: width/4-42/4,
              height: (width/4)*(9/16),
            }}
          >
            <img
              onClick={() => setSelectedSrc('/Gold.jpeg')}
              src={'/Gold.jpeg'}
              style={{
                objectFit: 'cover',
                width: width/4-42/4,
                height: (width/4)*(9/16),
              }}
            />
            <div
              onClick={() => setSelectedSrc('/Gold.jpeg')}
              className='grey-screen'
              style={{
                width: width/4-42/4-20,
                height: (width/4)*(9/16)-20
              }}
            >
              <h1
                style={{
                  color: colors.white,
                  fontSize: 72,
                }}
              >
                07
              </h1>
            </div>
          </div>

          <div
            style={{
              position: 'relative',
              width: width/4-42/4,
              height: (width/4)*(9/16),
            }}
          >
            <img
              onClick={() => setSelectedSrc('/Fashion.jpeg')}
              src={'/Fashion.jpeg'}
              style={{
                objectFit: 'cover',
                width: width/4-42/4,
                height: (width/4)*(9/16),
              }}
            />
            <div
              onClick={() => setSelectedSrc('/Fashion.jpeg')}
              className='grey-screen'
              style={{
                width: width/4-42/4-20,
                height: (width/4)*(9/16)-20
              }}
            >
              <h1
                style={{
                  color: colors.white,
                  fontSize: 72,
                }}
              >
                08
              </h1>
            </div>
          </div>
        </div>
      }
      { selectedSrc && (
        selectedSrc === '/overwatch/overwatch.jpeg'
          ? <Qaleb
              selectedSrc={selectedSrc}
              setSelectedSrc={setSelectedSrc}
              img1src={'/overwatch/xbox.jpeg'}
              img2src={'/overwatch/console.jpeg'}
              img3src={'/overwatch/console2.jpeg'}
              title={'Event Design'}
              content={'This project was for event designing, which included designing tickets, website, poster, crowd monitors, staff clothing to booth design.'}
              number={'01'}
            />
          : selectedSrc === '/Tomato.jpeg' ?
            <VideoQaleb
              selectedSrc={selectedSrc}
              setSelectedSrc={setSelectedSrc}
              img1src={'/HVSFLogo.jpeg'}
              img2src={'/HVSFQR.jpeg'}
              img3src={'/Tomato.jpeg'}
              title={'HVSF'}
              content={'This project I designed the logo which is referring to having a technological farm logo, modeling the cup and the packaging.'}
              number={'02'}
            />
          : selectedSrc === '/Drone.jpeg' ?
            <Qaleb
              selectedSrc={selectedSrc}
              setSelectedSrc={setSelectedSrc}
              img1src={'/Drone.jpeg'}
              img2src={'/Drone2.jpeg'}
              img3src={'/Drone3.jpeg'}
              title={'Drone Concept'}
              content={'This was a challenge for myself to make a drone concept drawing, modeling, texturing, rendering the model but after all it was a nice experience to have.'}
              number={'03'}
            />
          : selectedSrc === '/Dental.jpeg' ?
            <QalebNoSidePhotos
              selectedSrc={selectedSrc}
              setSelectedSrc={setSelectedSrc}
              title={'Logo Design'}
              content={'This project was for a dental clinic that was looking for a logo that can communicate with the age group of 7-10 years old, to encourage them to have early orthodontic care and to be seen as friendly as possible.'}
              number={'04'}
            />
          : selectedSrc === '/Cyberpunk.jpeg' ?
            <VideoQalebNoSidePhotos
              selectedSrc={selectedSrc}
              setSelectedSrc={setSelectedSrc}
              title={'RedSpades Website'}
              content={'TThis project was for RedSpades digital agency, the idea was to have a looped video, the video contains six buildings each building represent a department in the agency also a building in the middle with the main logo on top.'}
              number={'05'}
            />
          : selectedSrc === '/Poop.jpeg' ?
            <VideoQalebNoSidePhotos
              selectedSrc={selectedSrc}
              setSelectedSrc={setSelectedSrc}
              title={'Stop Motion'}
              content={'The project was to see how much creative we can be in terms of story telling and background design.'}
              number={'06'}
            />
          : selectedSrc === '/Gold.jpeg' ?
            <Qaleb
              selectedSrc={selectedSrc}
              setSelectedSrc={setSelectedSrc}
              img1src={'/Gold-white.jpeg'}
              img2src={'/Gold-blue.jpeg'}
              img3src={'/Gold-alt.jpeg'}
              title={'Redbull Fifa Trophy'}
              content={'The model is a concept for a trophy from Redbull for a FIFA tournament, I participated in doing the lighting and texturing for the model.'}
              number={'07'}
            />
          : selectedSrc === '/Fashion.jpeg' ?
            <VideoQaleb
              selectedSrc={selectedSrc}
              setSelectedSrc={setSelectedSrc}
              img1src={'/Fashion.jpeg'}
              img2src={'/Fashion2.jpeg'}
              title={'Fashion Design'}
              content={'This project where we had to figure out the approach for designing the clothings then we had to make cloth simulation for the 3d model.'}
              number={'08'}
            />
          : null
                
      )}
    </>
  );
};

export default Work;