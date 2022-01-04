import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Label, Space } from "../components/_shared";
import { getNFTContract } from "../contracts/utils";
import useWallet from "../hooks/useWallet";

const Home = () => {
  const { ethereum, account } = useWallet();
  const [contract, setContract] = useState(null)
  const [images, setImages] = useState([])
  const [imageUrls, setImageUrls] = useState([])

  useEffect(() => {
    if (account && ethereum) {
      const nftContract = getNFTContract(ethereum)
      setContract(nftContract)
    }
  }, [account, ethereum])

  useEffect(() => {
    if (images.length > 0) {
      setImageUrls([])
      images.forEach(image => {
        const reader = new FileReader();
        reader.onloadend = function () {
          setImageUrls((urls) => [...urls, reader.result])
        }
        reader.readAsDataURL(image)
      })
    }
  }, [images])

  const handleMint = async () => {
    if (!contract || imageUrls.length < 1) {
      return
    }

    const minted = await contract.mint(account, imageUrls)
    console.log('minted: ', minted)
    alert('Minted successfully')
  }

  const handleChangeImage = (e) => {
    setImages([...e.target.files]);
  }

  if (!account) {
    return <></>
  }

  return (
    <View direction="column" style={{ padding: 20 }}>
      <Button onClick={handleMint}>
        <Label>MINT</Label>
      </Button>
      <Space size={10} />
      <input type='file' onChange={handleChangeImage} accept="image/*" multiple />
      <Space size={10} />
      <View>
        {imageUrls.map((imageUrl, idx) => (<Image src={imageUrl} key={idx} />))}
      </View>
    </View>
  )
}

const View = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  flex-direction: ${props => props.direction === 'column' ? 'column' : 'row'};
`

const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;
`

export default Home;
