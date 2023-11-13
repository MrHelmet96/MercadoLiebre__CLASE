import React, { Component } from 'react'
import banner from '../assets/home-banner.jpg'

export default function Banner() {

    return (
      <figure>
        <img src={banner} alt="banner" />
      </figure>
    )
}