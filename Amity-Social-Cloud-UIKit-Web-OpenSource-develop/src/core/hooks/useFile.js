import { FileRepository } from '@amityco/js-sdk';

import useLiveObject from '~/core/hooks/useLiveObject';

const useFile = (fileId, dependencies = [fileId], resolver = undefined) => {
  return useLiveObject(() => FileRepository.fileInformationForId(fileId), dependencies, resolver);
};

export default useFile;
