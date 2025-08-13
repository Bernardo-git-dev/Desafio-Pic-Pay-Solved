import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AuthorizerService {
  async authorize(): Promise<boolean> {
    try {
      const response = await axios.get('https://util.devi.tools/api/v2/authorize');
      return response.data.message === 'Autorizado';
    } catch (error) {
      return false;
    }
  }
}
