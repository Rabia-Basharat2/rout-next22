import React from 'react'

const page = () => {
  return (
    <div>Address Page<figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
        City: Rahim Yar Khan
        </p>
      </blockquote>
      <figcaption className="font-medium">Address: Gulshan-e-Iqbal , RYK
        <div className="text-sky-500 dark:text-sky-400">
        Company/Organization Name: G-Tech
        </div>
        <div className="text-slate-700 dark:text-slate-500">
        Province/Region: Punjab

        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page