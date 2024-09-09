import { HttpStatusCode } from '../../common/enum/httpStatusCode.enum';
import { MainResponseType } from '../../common/type/mainResponse.type';
import { IInsertUserSchema } from './schemas/insert.schema';
import * as repository from './user.repository';

export async function insert(request: IInsertUserSchema): Promise<MainResponseType> {
  try {
    const data = await repository.insert(request);
    return {
      statusCode: HttpStatusCode.CREATED,
      data: data,
    };
  } catch (e) {
    throw e;
  }
}

export async function getAll(): Promise<MainResponseType> {
  const data = await repository.getAll();

  return {
    statusCode: HttpStatusCode.OK,
    data: data,
  };
}
