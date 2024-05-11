// eslint-disable-next-line react/prop-types
export default function ARChooseColor({color, setColor}) {
  return (
    <div className="flex gap-8 pb-6 justify-center md:justify-start">
          <div className="relative inline-block">
            <div
              onClick={() => setColor('midnight')}
              className='w-8 h-8 rounded-full bg-[rgb(46,54,66)]'
            />
              {color === 'midnight' && (
                <>
                  <div 
                    className="absolute w-10 h-10 border-2 border-blue-600 rounded-full pointer-events-none" 
                    style={{ top: '-4px', left: '-4px' }}
                  />
                  <div 
                    className="absolute w-full text-center text-sm"
                    style={{ bottom: '-28px', left: '-10px' }}
                  >
                    Midnight
                  </div>
                </>
              )}
          </div>
          <div className="relative inline-block">
            <div
              onClick={() => setColor('starlight')}
              className='w-8 h-8 rounded-full bg-[rgb(240,228,211)]'
            />
              {color === 'starlight' && (
                <>
                  <div 
                    className="absolute w-10 h-10 border-2 border-blue-600 rounded-full pointer-events-none" 
                    style={{ top: '-4px', left: '-4px' }}
                  />
                  <div 
                    className="absolute w-full text-center text-sm"
                    style={{ bottom: '-28px', left: '-8px' }}
                  >
                    Starlight
                  </div>
                </>
              )}
          </div>
          <div className="relative inline-block">
            <div
              onClick={() => setColor('spacegray')}
              className='w-8 h-8 rounded-full bg-[rgb(125,126,128)]'
            />
              {color === 'spacegray' && (
                <>
                <div 
                  className="absolute w-10 h-10 border-2 border-blue-600 rounded-full pointer-events-none" 
                  style={{ top: '-4px', left: '-4px' }}
                />
                <div 
                  className="absolute w-full text-center text-sm whitespace-nowrap"
                  style={{ bottom: '-28px', left: '-14px' }}
                >
                 Space Gray
                </div>
              </>
              )}
          </div>
          <div className="relative inline-block">
            <div
              onClick={() => setColor('silver')}
              className='w-8 h-8 rounded-full bg-[rgb(227,228,230)]'
            />
              {color === 'silver' && (
                <>
                  <div 
                    className="absolute w-10 h-10 border-2 border-blue-600 rounded-full pointer-events-none" 
                    style={{ top: '-4px', left: '-4px' }}
                  />
                  <div 
                    className="absolute w-full text-center text-sm"
                    style={{ bottom: '-28px', left: '0px' }}
                  >
                    Silver
                  </div>
                </>
              )}
          </div>
        </div>
  )
}
