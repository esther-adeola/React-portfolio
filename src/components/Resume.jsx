// import React from 'react'
import homePhoto from "../images/CV_EE SD.pdf"

export default function Resume() {
  return (
    <>
    <h2>Please see Resume below</h2>
    <iframe src={homePhoto} type="application/pdf" width="600" height="800"></iframe>
    </>
  )
}
