import React from 'react'

const FindUs = () => {
  return (
    <section className="w-full h-[90vh]">
      <div className="relative flex flex-col justify-center items-center w-full h-full">
        <h2>Donde Encontrarnos...</h2>
        <div className="w-full h-[70%]">
          <iframe
            title='Google Maps INOBA'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.441365817122!2d-74.0002933!3d5.031944200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e406fd83bc4880d%3A0x3991fb08b98e35eb!2sINOBA%20SOLUCIONES!5e0!3m2!1sen!2sco!4v1755226028157!5m2!1sen!2sco"
            className='border-0 rounded-xl w-full h-full'
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

export default FindUs