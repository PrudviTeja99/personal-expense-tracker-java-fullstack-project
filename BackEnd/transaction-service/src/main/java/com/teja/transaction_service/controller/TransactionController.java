package com.teja.transaction_service.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.teja.transaction_service.model.PageableTransactions;
import com.teja.transaction_service.model.TransactionModel;
import com.teja.transaction_service.service.TransactionService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/transactions")
@CrossOrigin(origins = "*")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @PostMapping()
    public ResponseEntity<TransactionModel> createTransaction(@RequestBody @Valid TransactionModel transaction) {
        return ResponseEntity.status(HttpStatus.CREATED).body(transactionService.createTransaction(transaction));
    }

    @GetMapping()
    public ResponseEntity<PageableTransactions> getAllTransactions(@RequestParam(defaultValue = "0",name = "page",required = false) int page, @RequestParam(defaultValue = "10",name = "size",required = false) int size) {
        return ResponseEntity.ok(transactionService.getAllTransactions(page, size));
    }

    @PutMapping()
    public ResponseEntity<TransactionModel> updateTransaction(@RequestBody @Valid TransactionModel transaction) {
        return ResponseEntity.ok(transactionService.updateTransaction(transaction));
    }

    @DeleteMapping("/{transactionId}")
    public ResponseEntity<Void> deleteTransaction(@PathVariable String transactionId) {
        transactionService.deleteTransaction(transactionId);
        return ResponseEntity.noContent().build();
    }
}
