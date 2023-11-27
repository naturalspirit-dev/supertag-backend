var gamerooms = [];
exports.createGame = (req, res) => {
  let gamecode = req.body.gamecode;
  if(gamecode === undefined) {
    res.status(400).json({message: 'Invalide gamecode'});
    return;
  }

  if(gamerooms[gamecode] !== undefined) {
    res.status(400).json({message: 'Already exist gamecode'});
    return;
  }
  
  let owner = req.body.owner;

  console.log(owner);
  gamerooms[gamecode] = {
    owner: owner,
    joiners: []
  }

  res.status(200).json({message: 'created gameroom successfully', gameCode: gamecode, gameroom: gamerooms[gamecode]});
}

exports.joinGame = (req, res) => {
  let gamecode = req.body.gamecode;
  if(gamecode === undefined) {
    res.status(400).json({message: 'Invalide gamecode'});
    return;
  }

  console.log('----------', gamerooms[gamecode])
  if(gamerooms[gamecode]) {
    res.status(200).json({message: 'joined gameroom successfully', gameCode: gamecode, gameroom: gamerooms[gamecode]});
  } else {
    res.status(400).json({message: 'Invalid gamecode'});
  }
}