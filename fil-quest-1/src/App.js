import logo from './img/filecoin-logo.png';
import nftstoragelogo from './img/nftstorage-logo.png';
import 'rpgui/rpgui.css';
import 'rpgui/rpgui.js';
import CustomWebcam from "./CustomWebcam";
import FileUploader from "./FileUploader";

function App() {
  return (
    <div className="App">
      <div class="rpgui-content rpg-cursor-default" style={{overflowY: 'scroll'}}>
        <div id="main" class="rpgui-center">
          <div class='inner rpgui-container framed' style={{ width:'600', position: 'relative' }}>
            <br />

            <div style={{fontSize:"200%"}}>
              <h1>IPFS & Filecoin</h1>
            </div>

            <h2>Small Quest</h2>
            
            <img src={logo} alt="Filecoin Logo" style={{display: "inline-block", height: 100, float: 'inherit'}}/>

            <hr class="golden"/>
            <br />

            <p>
              This quest is about uploading a photo or picture to IPFS/Filecoin via NFT.Storage service. 
              <br/>
              <br/>
              <img src={nftstoragelogo} alt="NFT.Storage Logo" style={{display: "inline-block"}}/>
              <br/>
              <br/>
              NFT.Storage is a IPFS pinning services and backs up the data on Filecoin. It is trusted by OpenSea, Zora, Magic Eden & Rarible. There is a total of more than 100 Million NFT stored on the service. 
            </p>

            <hr class="clear:both"/>

            <h1> The Quest </h1>

            <div class="rpgui-icon sword"></div>
            <br />
            <br />

            <div>
              <div class="rpgui-container framed" style={{position: 'relative', width: '90%', display: 'inline-block'}}>
                  <h1>Step 1</h1>
                <p>
                  Click "camera" to take a selfie with Filecoin booth, or
                <br />
                <br />
                  Click "upload" to upload a photo
                <br />
                <br />
                  (This will upload a file to NFT.Storage)
                </p>
              </div>
            </div>

            <br />
            <br />
            <hr class="clear:both"/>
            <br />

            <div class="rpgui-icon shield"></div>
            <br />
            <br />
            
            <div>
              <div class="rpgui-container framed" style={{position: 'relative', width: '90%', display: 'inline-block'}}>
                <h1>Step 2</h1>
                <p>
                  Learn about the QR code and Content ID (CID) it generated. <br />
                <br />
                  (This link will be unique to this photo you uploaded, it will never change no matter where it is stored on IPFS.)
                </p>
              </div>
            </div>

            <br />
            <br />
            <hr class="clear:both"/>
            <br />
            
            <div class="rpgui-icon potion-blue"></div>
            <br />
            <br />
            
            <div>
              <div class="rpgui-container framed" style={{position: 'relative', width: '90%', display: 'inline-block'}}>
                <h1>Step 3</h1>
                <p>
                  Show this QR code & CID to get a small swag. ❤️
                  <br />
                  <br />
                </p>
              </div>
            </div>

            <br />
            <br />
            <hr class="clear:both"/>
            <br />

            <h1> Start Here </h1>
            <button type="type" class="rpgui-button">
              <p><a href="#camera">Take Photo</a></p>
            </button>
            
            <br />
            <p> or </p>
            <br />
            
            <button type="type" class="rpgui-button">
              <p><a href="#camera">Upload Photo</a></p>
            </button>

            <br />
            <br />
            <hr class="clear:both"/>
            <br />

            <div id="camera">
              <div class="rpgui-container framed-golden-2" style={{position: 'relative', width: '90%', display: 'inline-block'}}>
                <h1>Camera App</h1>
                <div>
                  <CustomWebcam />
                </div>
                <br />
              </div>
            </div>

            <br />
            <br />
            <hr class="clear:both"/>
            <br />

            <div id="uploadfile">
              <div class="rpgui-container framed-golden-2" style={{position: 'relative', width: '90%', display: 'inline-block'}}>
                <h1>File Uploader</h1>
                <FileUploader />
                <br />
              </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <div class="rpgui-center">
              <h1 style={{fontSize: '150%'}}>That's it, for now!</h1>
              <p> Check out the 
                <a href="https://linktr.ee/filecoinquest"> Filecoin Quests </a>
                for more information about IPFS & Filecoin Dev Quests.
              </p>

              <a href="#main">- Back to Top -</a>
              <br />
              <br />

              <a href="https://linktr.ee/filecoinquest">- Back to Filecoin Quests -</a>
            </div>

            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
