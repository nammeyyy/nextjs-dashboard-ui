import {NextResponse} from 'next/server';
import {connectMongoDB} from '../../../../lib/mongodb';
import {Post} from '../userExists/route';

export async function GET() {
  await connectMongoDB();
  const totalPosts = await Post.find();
  return NextResponse.json({totalPosts});
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get('id');
  await connectMongoDB();
  await Post(req).findByIdAndDelete(id);
  return NextResponse.json({message: 'Post deleted'}, {status: 200});
}
