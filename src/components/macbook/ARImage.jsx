// eslint-disable-next-line react/prop-types
export default function ARImage({color}) {
  let imageToShow;
  
  switch (color) {
    case 'midnight':
      imageToShow = <img src="https://www.apple.com/v/macbook-air/s/images/overview/routers/ar_phone_midnight__bl9j69erz4ia_large.jpg" alt="midnight macbook"/>
      break;
    
    case 'starlight':
      imageToShow = <img src="https://www.apple.com/v/macbook-air/s/images/overview/routers/ar_phone_starlight__bgf0t1w4ees2_large.jpg" alt="starlight macbook"/>
      break;

    case 'spacegray':
      imageToShow = <img src="https://www.apple.com/v/macbook-air/s/images/overview/routers/ar_phone_spacegray__c308joh3q4uq_large.jpg" alt="spacegray macbook"/>
      break;

    case 'silver':
      imageToShow = <img src="https://www.apple.com/v/macbook-air/s/images/overview/routers/ar_phone_silver__bo8d937g88uu_large.jpg" alt="silver macbook"/>
      break;
    
    default:
      imageToShow = null;
  }
  return (
    <div>
      {imageToShow}
    </div>
  )
}
