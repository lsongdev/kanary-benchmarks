import { get } from 'kanary/router';

class Home {
  @get('/')
  async index(){
    return 'hello';
  }
}

export default Home;