import { get } from 'kanary/router';
import Controller from 'kanary/controller';

class Home extends Controller {
  @get('/')
  async index(){
    return 'hello';
  }
}

export default Home;