const kayoMakesCake = healthStatus => {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        if (healthStatus
   === 'healthly') {
          resolve('Will have many cakes! Enjoy the party!')
        } else {
          reject(new Error('No cakes :( but Yes, will have party!'))
        }
      }, 1000)//two weeks are 1209600ms
    })
  }

let promise = kayoMakesCake('healthly')
    .then(cake => console.log(cake))
    .catch(nocake => console.log(nocake))

promise = kayoMakesCake('not healthly')
    .then(cake => console.log(cake))
    .catch(nocake => console.log(nocake.message))
