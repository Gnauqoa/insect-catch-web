#include <iostream>

using namespace std;

struct SinhVien {
    char* hoten;
    char* id;
    double diemLT;
    double diemTH;
    double avg;
};
/* Các hàm thao tác trên cấu trúc SinhVien */
/*1. Ham khoi tao SinhVien */
void Init_SV(SinhVien& sv) {
    sv.hoten = new char[50]; //hoten = "Nguyen Minh Lan"
    sv.id = new char[9]; //id = "21120110"
    sv.diemLT = 5.0;
    sv.diemTH = 5.0;
    sv.avg = 5.0;
}
/*2. Ham nhap SinhVien */
void input_SV(SinhVien& sv) {
    /* Khoi tao sv, Cap phat bo nho */
    Init_SV(sv);
    cin.ignore();
    cout << "Nhap ho ten: ";
    cin.getline(sv.hoten, 51);
    cout << "Nhap id: ";
    cin.getline(sv.id, 10);
    cout << "Nhap diem LT: ";
    cin >> sv.diemLT;
    cout << "Nhap diem TH: ";
    cin >> sv.diemTH;
    sv.avg = sv.diemLT * 0.7 + sv.diemTH * 0.3;
}
/*3. Ham xuat Sinh Vien */
void output_SV(SinhVien sv) {
    cout << sv.hoten << "\t"
        << sv.id << "\t"
        << sv.diemLT << "\t"
        << sv.diemTH << "\t"
        << sv.avg;

}
/* Dinh nghia cau truc node */
struct node {
    SinhVien pdata;
    node* pnext;
};
/* Cac ham thao tac tren Node */
/* Ham tao node */
node* create_Node() {
    node* newNode = new node;
    cout << "Nhap sv: " << endl;
    input_SV(newNode->pdata);
    newNode->pnext = nullptr;
    return newNode;
}
/* In 1 Node */
void output_Node(node* ptr) {
    output_SV(ptr->pdata);
}
/* Dinh nghia cau truc danh sach */
struct list {
    node* phead;
    node* ptail;
};
void Init_ds(list& L)
{
    L.phead = L.ptail = NULL;
}

void addFirst(list& L, node* p)
{
    if (L.phead == NULL) {
        L.phead = p;
        L.ptail = p;
    }
    p->pnext = L.phead;
    L.phead = p;
}

void addLast(list& L, node* p)
{
    if (L.phead == NULL) {
        L.phead = p;
        L.ptail = p;
    }
    L.ptail = p->pnext;
    L.ptail = p;
}

void input_ds(list& L)
{
    int n;
    cout << "Nhap so luong sinh vien: ";
    cin >> n;
    node* p;
    for (int i = 0; i < n; i++) {
        p = create_Node();
        addLast(L, p);
    }
}

void output_ds(list L)
{
    node* p = L.phead;
    if (L.phead == NULL) {
        cout << "danh sach rong";
        return;
    }
   while(p->pnext!=NULL) 
   {
        output_Node(p);
        p = p->pnext;
   } 
}

int main(){
  SinhVien sv;
  list l;
  string a = "a", b= "b", c= "c";
  list<int> sn;
  return 0;
}