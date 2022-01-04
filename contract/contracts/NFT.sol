pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NftMinter is ERC721, Ownable {
    using Counters for Counters.Counter;
    using Strings for uint256;
    Counters.Counter _tokenIds;
    mapping(uint256 => string) _tokenURIs;

    struct RenderToken{
      uint256 id;
      string uri;
    }


  constructor() ERC721("Test", "TS") {}

  function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal {
    _tokenURIs[tokenId] = _tokenURI;

  }

  function tokenURI(uint256 tokenId) public view virtual override returns(string memory){
    require(_exists(tokenId));
    string memory _tokenURI =_tokenURIs[tokenId];
    return _tokenURI;
  }

  function getAllTokens() public view returns(RenderToken[] memory) {
    uint256 latestId = _tokenIds.current();
    uint256 counter = 0;
    RenderToken[] memory result = new RenderToken[](latestId); // latest id is the maximum size of the current tokens.
    for(uint256 i = 0; i < latestId; i++){
      if(_exists(counter)){
        string memory uri = tokenURI(counter);
        result[counter] = RenderToken(counter, uri);
      }
      counter++;
    }
    return result;
  }


  function mint(address recipient, string[] memory uris) public returns(uint256) {
    uint256 newId = _tokenIds.current();
    for (uint256 i = 0; i < uris.length; i ++) {
      newId = _tokenIds.current();
      _mint(msg.sender, newId);
      _setTokenURI(newId, uris[i]);
      _tokenIds.increment();
    }
    return newId;
  }
}