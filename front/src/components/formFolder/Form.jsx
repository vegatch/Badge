import React from 'react';


import './form.css';



function Badge() {
    const initialState ={
        fullName:'',
        companyName:'',
        department:'',
        title:'',
        empId:'',
        companyLogo:'',
    }
    const [formData, setFormData] = React.useState(initialState)

    const [logo, setLogo] = React.useState()

    const onLogoChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setLogo(URL.createObjectURL(e.target.files[0]));
        }
    }
    // --------------------------------------------------------
    const [image, setImage] = React.useState(null);
    const [bgRemove, setBgRemove] = React.useState(null);

    const handleBgRemoval = async () => {
    //   const apiKey = "njv7RHG7MqkW3iqVX9wgPLxm";
      const apiKey ='ND7yvm7GC28KhBvsDtcge4rc' //  my api
      const apiUrl = "https://api.remove.bg/v1.0/removebg";
 
      const formData = new FormData();
      formData.append("image_file", image, image.name);
      formData.append("size", 'auto');
 
      try {
          const res = await fetch(apiUrl, {
              method: 'POST',
              headers: {
                  'X-Api-Key': apiKey
              },
              body: formData
          });
 
          const data = await res.blob();
          const imageUrl = URL.createObjectURL(data);
          setBgRemove(imageUrl);
      } catch (error) {
          console.log(error);
      }
  };
    // ---------------------------------------------------------

    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
            value: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        });
    };
    console.log(formData)   



    

  return (
    <div>
    
        <form>
            <>
                <label>
                    Fullname
                    <input
                        type='text'
                        name ='fullName'
                        id='fullName'
                        maxLength='30'
                        onChange={handleChange}
                        required
                    />
                </label>
            </>
            <>
                <label>
                    Company
                    <input
                        type='text'
                        name ='companyName'
                        id='companyName'
                        maxLength='19'
                        onChange={handleChange}
                        required
                    />
                </label>
            </>
            <>
                <label>
                    Department
                    <input
                        type='text'
                        name ='department'
                        id='department'
                        maxLength='19'
                        onChange={handleChange}
                        required
                    />
                </label>
            </>
            <>
                <label>
                    Title
                    <input
                        type='text'
                        name ='title'
                        id='title'
                        maxLength='19'
                        onChange={handleChange}
                        required
                    />
                </label>
            </>
            <>
                <label>
                    Employee ID
                </label>
                    <input
                        type='text'
                        name ='empId'
                        id='empId'
                        maxLength='30'
                        onChange={handleChange}
                    />                
            </>
            <>
                <label>
                    Logo
                </label>
                    <input
                        type='file'
                        name ='companyLogo'
                        id='companyLogo'
                        maxLength='30'
                        onChange={onLogoChange}
                    />                
            </>

        </form>
        
        <div>
            <form>
               
               {/* ================================================== */}
                <div className="container">
          <h1 className="mb-4">Image Background Remover</h1>
          <div className="input-file mb-4">
              <label htmlFor="userImg" className="info_text">
                  Select a File
              </label>
              <input
                  type="file"
                  id="userImg"
                  className="form-control-file"
                  onChange={(e) => setImage(e.target.files[0])}
                  required
              />
          </div>
          {/* <div className="d-flex mb-4">
              {image && (
                  <div className="image-preview mr-2">
                      <img src={image ? URL.createObjectURL(image) : ""}
                          alt="" />
                  </div>
              )}
              {bgRemove && (
                  <div className="image-preview">
                      <img src={bgRemove} alt="" />
                  </div>
              )}
          </div> */}
          <div className='idCard'>
            
            <div className='header'>
                <div className='empty'></div>
                <div className='imgContainer'>
                    {bgRemove && <img src={bgRemove} alt="bg removed" />}
                </div>
            </div>
            <div className='badge-info'>
                <span>{formData.fullName}</span>
                <div className='flex-container'>
                    <div className='left'>
                        
                        <span>{formData.department}</span>
                        <span>ID: {formData.empId}</span>
                    </div>
                    <div className='right'>
                        <img src={logo} alt='company Logo'/>
                    </div>
                </div>
            </div>
            <div className='companyName'>
                <span>{formData.companyName}</span>
            </div>
            <div className='bottom'>
                {formData.title}
            </div>
         
          </div>
          {bgRemove && (
              <div className="mb-4">
                  <a href={bgRemove}
                      download="background_removed_image.png">
                      <button className="btn btn-success">
                          Download
                      </button>
                  </a>
              </div>
          )}
          <div>
              <button type="button"
                  onClick={handleBgRemoval}
                  className="btn btn-primary">
                  Remove Background
              </button>
          </div>
      </div>
               {/* ========================================================= */}
            </form>
        </div>
        
        
    </div>
  )
}

export default Badge





