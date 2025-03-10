
export default function MapComponent() {    

    const style = {
        width: '100%',
        height: '350px'
    };

    return (
      <div className="select-none">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4864.608182975298!2d-58.99470517088357!3d-27.45084922841933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94450dde4478e789%3A0xddba4abe851ac73a!2sJB%20Estudio%20Jur%C3%ADdico!5e0!3m2!1ses!2sar!4v1741629142387!5m2!1ses!2sar" 
            width={ style.width } 
            height={ style.height }  
            style={{ border: 0 }}
            allowFullScreen={ false } 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            >

            </iframe>
      </div>
    );
  }