import Image from 'next/image'
import { NoteInput } from '@/component/noteeditor/NoteInput';
import { NotePreview } from '@/component/noteeditor/NotePreview';
export default function Page() {
  return (
    <div>
      <NotePreview />
      <NoteInput />
    </div>
  )
}
