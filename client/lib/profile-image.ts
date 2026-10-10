type ProfileIdentity = {
  fullname: string;
  studentId?: string;
  email?: string;
};

export function getDefaultProfileImage({ fullname, studentId, email }: ProfileIdentity) {
  const seed = encodeURIComponent(studentId?.trim() || email?.trim() || fullname.trim() || "placely");
  return `https://api.dicebear.com/10.x/voxel-art/svg?seed=${seed}`;
}
