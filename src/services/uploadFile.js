import axios from "axios";

export class uploadFile
{
    uploadFile(e)
    {
        const file = e.target.files
        if(file.length) {
            this.createImage(file[0])
        }
    }

    createImage(file) {
        let formData = new FormData()
        formData.append('file', file);

        axios.post(`${import.meta.env.VITE_API_URL}/upload`, formData, {
            headers: {
                'Content-Type':'multipart/form-data'
            }
        }).then(function() {
            console.log('SUCCESS')
        })
    }
}

/* example of input upload file
<div class="row">
    <div class="col-lg-12">
        <input type="file" id="file" @change="uploadFile" />
    </div>
</div> */