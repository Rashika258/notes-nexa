import React, { FC } from 'react';
import {Label} from '../ui/label';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Input } from '../ui/input';
import { Button } from '../ui/button';
// import {} from '@lib/p'
interface BannerUploadFormProps {
    dirType: 'workspace' | 'file' | 'folder',
    id: string
}

const BannerUploadForm: FC<BannerUploadFormProps>= ({dirType, id}) => {

  const supabase = createClientComponentClient();
  // const {state, workspaceId, folderId, dispatch} = useApp

  return (
    <form >
       <Label
        className="text-sm text-muted-foreground"
        htmlFor="bannerImage"
      >
        Banner Image
      </Label>
      <Input
      id='bannerImage'
      type='file'
      accept='image/*'

      />
      <small className='text-red-600'>

      </small>

      <Button type='submit'>

      </Button>
    </form>
  );
}

export default BannerUploadForm;
