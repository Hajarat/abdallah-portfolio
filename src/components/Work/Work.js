import React, { useState } from 'react';
import { colors } from '../../styles';

import { Popover } from 'antd';
import Overwatch from './Overwatch';

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
          ? <Overwatch
              selectedSrc={selectedSrc}
              setSelectedSrc={setSelectedSrc}
            />
          : null
      )}
    </>
  );
};

export default Work;