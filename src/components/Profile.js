import React from "react";

function Profile() {
  return (
    <div className="flex justify-around my-2.5 items-center" id="profile">
      <div className="flex items-center gap-x-5 text-left">
        <img
          src={require("../image/profile-pic.jpg")}
          alt="profile pic"
          className="rounded-full w-28 h-28 object-cover"
        ></img>
        <p>
          Meng Lavy <br></br>Review your dream everyday
        </p>
      </div>
      <div className="bg-blue-300 rounded-2xl shadow-md hover:text-white hover:bg-slate-500 ">
        <button type="button" className="p-3 " title="download portfolio">
          <a
            href="https://drive.google.com/u/0/uc?id=1BpoNmkvitusebywjZlnWmlGdWKYqOWNd&export=download"
            download="lavyCVHah.pdf"
          >
            Portfolio
          </a>
          {/* <a
              href={`${process.env.PUBLIC_URL}/src/file/lavyCVHah.pdf`}
              download
            >
              Portfolio
            </a> */}
        </button>
      </div>
    </div>
  );
}

export default Profile;
