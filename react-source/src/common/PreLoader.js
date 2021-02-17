import { useEffect } from "react"
import $ from 'jquery';

export default function PreLoader() {

  useEffect(() => {
    $("#preloader").delay(1500).fadeOut("slow");
  }, [])

  return (
    <div id="preloader">
      <div id="status" />
    </div>
  )
}