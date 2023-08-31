import {useState} from "react";
import { NFTStorage } from 'nft.storage';

const NFT_STORAGE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDk4MzljQTEyQTNhMDUyRjRCYjg4ZjRmZEM5ZkFGMWRjQTc4NkI4MWQiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY5Mjg1ODYzMjUwMywibmFtZSI6IkZpbGVjb2luUXVlc3QifQ.HNwrGOE8tQqtIpRrtjs0yaijhE_RiqoG2REQUCCEo38';

const FileUploader = () => {

    const [files, setFile] = useState(null);
    const client = new NFTStorage({ token: NFT_STORAGE_TOKEN })

    const onSubmit = (event) => {
        event.preventDefault();

        try {
            setSendingState(true);
            const rootCid = client.store(files);
            console.log("Successfully sent to IPFS");
            console.log("https://" + rootCid + ".ipfs.nftstorage.link");
            setCids([rootCid]);
        } catch {
             console.log("Failed to send to IPFS");
        }
        
    };

    const onInputChange = (event) => {
        setFile= useState([]);
    };
    
    return (
      <div>
        <form method="post" action="#" id="#"  onSubmit={onSubmit}>
          <input type="file"
                  onChange={onInputChange}
                  className="form-control"
                  multiple/>

          <button class="rpgui-button" type="submit">
              <p>Upload Files 🗂️ </p>
          </button>
        </form>
      </div>
    );
};

export default FileUploader;