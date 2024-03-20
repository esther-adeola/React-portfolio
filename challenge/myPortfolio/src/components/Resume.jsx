// import React from 'react'
import resume from "../images/CV_EE_SD.pdf"
export default function Resume() {
  return (
    <>
    <h2>Please see Resume below</h2>
    <iframe src={resume} type="application/pdf" width="600" height="800"></iframe>
    </>
  )
}
