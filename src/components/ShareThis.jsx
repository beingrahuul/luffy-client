import PropTypes from 'prop-types';
import { InlineShareButtons } from 'sharethis-reactjs';

const ShareThis = ({ url }) => {
  if (!url) {
    console.error('The `url` prop is required for the ShareThis component.');
    return null;
  }

  return (
    <InlineShareButtons
      config={{
        alignment: 'center',  // Alignment of buttons (left, center, right)
        color: 'social',      // Color of buttons (social, white)
        enabled: true,        // Show/hide buttons (true, false)
        font_size: 14,        // Font size for the buttons
        labels: 'cta',        // Button labels (cta, counts, null)
        language: 'en',       // Language to use
        networks: [   
          'twitter',
          'whatsapp',
          'reddit',
          'telegram',
          'facebook',
          'messenger',
        ],
        padding: 12,          
        radius: 4,            
        show_total: true,
        size: 40,             

        // Optional parameters
        min_count: 10,                    
        url: url, // Use the provided URL
        description: "Watch HD Movies and Series Online on Luffy",
        title: "Watch HD Movies and Series Online on Luffy",           
        message: "Watch HD Movies and Series Online on Luffy",     
        subject: "Watch HD Movies and Series Online on Luffy",  
      }}
    />
  );
};

// Define prop types
ShareThis.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ShareThis;
