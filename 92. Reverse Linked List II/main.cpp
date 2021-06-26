#include <algorithm>  // std::make_heap, std::pop_heap, std::push_heap, std::sort_heap
#include <iostream>
#include <iterator>
#include <limits>
#include <queue>
#include <sstream>
#include <string>
#include <unordered_map>
#include <utility>  // std::pair, std::make_pair
#include <vector>

using namespace std;
using std::vector;

struct ListNode {
  int val;
  ListNode *next;
  ListNode() : val(0), next(nullptr) {}
  ListNode(int x) : val(x), next(nullptr) {}
  ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution {
 public:
  ListNode *reverseBetween(ListNode *head, int m, int n) {
    if (!head || !head->next || m == n) return head;

    ListNode *hh = new ListNode(0, head);
    ListNode *rez = hh;
    int k = 1;

    while (k != m) hh = hh->next, k++;

    ListNode *end1 = hh;
    hh = hh->next;
    ListNode *st2 = hh;
    ListNode *tmp1, *tmp2;
    tmp1 = hh->next;

    while (k++ < n) {
      tmp2 = tmp1->next;
      tmp1->next = hh;
      hh = tmp1;
      tmp1 = tmp2;
    }

    end1->next = hh;
    st2->next = tmp1;

    return rez->next;
  }
};