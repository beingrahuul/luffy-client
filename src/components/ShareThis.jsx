import {InlineShareButtons} from 'sharethis-reactjs';

const ShareThis = ({url}) => {
  return (
    <InlineShareButtons
          config={{
            alignment: 'center',  // alignment of buttons (left, center, right)
            color: 'social',      // set the color of buttons (social, white)
            enabled: true,        // show/hide buttons (true, false)
            font_size: 14,        // font size for the buttons
            labels: 'count',        // button labels (cta, counts, null)
            language: 'en',       // which language to use (see LANGUAGES)
            networks: [   
              'twitter',
              'whatsapp',
              "telegram",
              'facebook',
              'messenger',
              'reddit',
            ],
            padding: 12,          
            radius: 4,            
            show_total: true,
            size: 40,             


            // OPTIONAL PARAMETERS

            min_count: 10,                    
            url: `${url}`, 
            description: "Watch HD Movies and Series Online on Luffy",
            title: "Watch HD Movies and Series Online on Luffy",           
            message: "Watch HD Movies and Series Online on Luffy",     
            subject: "Watch HD Movies and Series Online on Luffy",  
          }}
        />
  )
}

export default ShareThis